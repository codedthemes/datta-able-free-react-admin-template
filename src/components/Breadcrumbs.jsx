import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

// react-bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import { APP_DEFAULT_PATH } from 'config';
import navigation from 'menu-items';

// ==============================|| MAIN BREADCRUMB ||============================== //

export default function Breadcrumbs() {
  const location = useLocation();

  const [main, setMain] = useState({});
  const [item, setItem] = useState({});

  const getCollapse = useCallback(
    (item) => {
      if (item.children) {
        item.children.forEach((collapse) => {
          if (collapse.type === 'collapse') {
            getCollapse(collapse);
          } else if (collapse.type === 'item' && location.pathname === collapse.url) {
            setMain((prev) => ({
              ...prev,
              type: 'collapse', // Add this
              title: typeof item.title === 'string' ? item.title : undefined
            }));
            setItem((prev) => ({
              ...prev,
              type: 'item', // Add this
              title: typeof collapse.title === 'string' ? collapse.title : undefined,
              breadcrumbs: collapse.breadcrumbs !== false
            }));
          }
        });
      }
    },
    [location.pathname]
  );

  useEffect(() => {
    navigation.items.forEach((navItem) => {
      if (navItem.type === 'group') {
        getCollapse(navItem);
      }
    });
  }, [location.pathname, getCollapse]);

  let mainContent;
  let itemContent;
  let breadcrumbContent;
  let title = '';

  if (main?.type === 'collapse') {
    mainContent = (
      <Breadcrumb.Item href="#" className="text-capitalize">
        {main.title}
      </Breadcrumb.Item>
    );
  }

  if (item?.type === 'item') {
    title = item.title ?? '';
    itemContent = (
      <Breadcrumb.Item href="#" className="text-capitalize">
        {title}
      </Breadcrumb.Item>
    );

    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <div className="page-header">
          <div className="page-block">
            <Row className="align-items-center">
              <Col md={12} className="page-header-title text-capitalize">
                <h5>{title}</h5>
              </Col>
              <Col md={12}>
                <Breadcrumb listProps={{ style: { marginBottom: 0 } }}>
                  <Breadcrumb.Item href={APP_DEFAULT_PATH}>Home</Breadcrumb.Item>
                  {mainContent}
                  {itemContent}
                </Breadcrumb>
              </Col>
            </Row>
          </div>
        </div>
      );
    } else {
      breadcrumbContent = null;
    }
  }

  return <>{breadcrumbContent}</>;
}
