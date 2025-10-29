// project-imports
import BasicTabs from 'sections/components/basic/tabs-pills/BasicTabs';
import Pills from 'sections/components/basic/tabs-pills/BasicPills';
import VerticalPills from 'sections/components/basic/tabs-pills/VerticalPills';
import ReferenceHeader from 'components/ReferenceHeader';

// ==============================|| BASIC - TABS & PILLS ||============================== //

export default function TabsPillsPage() {
  return (
    <>
      <ReferenceHeader
        caption="Takes the basic nav from above and adds the .nav-tabs class to generate a tabbed interface."
        link="https://react-bootstrap.netlify.app/docs/components/navs/#tabs"
      />
      <BasicTabs />
      <Pills />
      <VerticalPills />
    </>
  );
}
