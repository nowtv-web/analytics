require_relative '../test_helper.rb'

class AnalyticsTest < AcceptanceTest

  before do
    visit '/'
  end

  #todo: how to check it once fired only once??
  #it "Clicking an anchor with manual js tracking does not fire twice " do
  #  click_link 'Anchor not being double tracked'
  #  trackedEvents.must_include eventsMap[:click_event] # link clicked
  #  trackedVariable('link_tracking').must_include '|anchor-not-being-double-tracked|'
  #end
  #
  #it "Clicking a span without 'data-tracking' but with manual js tracking is fired" do
  #  find('#manualTrack').click
  #  trackedEvents.must_equal eventsMap[:linkClick] # link clicked
  #  trackedVariable('link_tracking').must_include '|span-manually-tracked-by-js'
  #end
  #
  #it "Clicking an anchor without 'data-tracking=false' and manual js tracking is fired" do
  #  click_link 'Anchor being tracked with JS'
  #  trackedEvents.must_equal eventsMap[:linkClick] # link clicked
  #  trackedVariable('link_tracking').must_include '|anchor-being-tracked-with-js|'
  #end

end