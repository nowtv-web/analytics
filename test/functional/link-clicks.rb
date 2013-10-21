require_relative '../test_helper.rb'

class AnalyticsTest < AcceptanceTest

  before do
    visit '/'
  end

  it "Tracks a link being clicked and linkDetails is mapped correctly" do
    click_link "Standard link"
    trackedEvents.must_include eventsMap[:linkClick]
    trackedEvents.wont_include eventsMap[:pageLoad]
    trackedVariable('linkDetails', :prop).must_include 'standard-link'
    trackedVariable('linkDetails', :prop).must_include 'global/analytics-demo-page'
    trackedVariable('linkDetails').must_include references('linkDetails', :prop)
    trackedVariable('pageName', :pagename).must_include 'Analytics demo page'
  end

  it "Tracks a button being clicked" do
    click_button "Normal Button"
    trackedEvents.must_include eventsMap[:linkClick]
    trackedVariable('linkDetails', :prop).must_include 'normal-button'
  end
  it "A button being clicked twice doesn't have the events stacked'" do
    click_button "Normal Button"
    click_button "Normal Button"
    trackedEvents.must_equal [eventsMap[:linkClick]]
    trackedVariable('linkDetails', :prop).must_include 'normal-button'
  end

  it "Tracks a link being clicked within a module and pod" do
    find(:css, "[data-tracking-module='testing'] [data-tracking-pod='pod-1'] a").click
    trackedEvents.must_include eventsMap[:linkClick]
    trackedVariable('linkDetails', :prop).must_include 'testing'
    trackedVariable('linkDetails', :prop).must_include 'pod-1'
    trackedVariable('linkDetails', :prop).wont_include 'pod-2'
  end

  it "tracks non-anchor elements that have the data-tracking attribute" do
    find('#a-non-anchor').click
    trackedVariable('linkDetails', :prop).must_include 'tracking-everything-else'
  end

  it "does not track elements which have data-tracking=false" do
    find('#anchor-not-tracked', :prop).click
    find('#button-not-tracked', :prop).click
    find('#submit-not-tracked', :prop).click
    trackedVariable('linkDetails', :prop).must_be_nil
  end

  it "does not track non-anchors which have data-tracking=false" do
    find('h3[data-tracking="false"]').click
    trackedVariable('linkDetails', :prop).must_be_nil
  end

end