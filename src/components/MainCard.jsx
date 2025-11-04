import PropTypes from 'prop-types';

// react-bootstrap
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

// ==============================|| MAIN CARD ||============================== //

export default function MainCard({
  children,
  subheader,
  footer,
  secondary,
  content = true,
  title,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
  ref
}) {
  return (
    <Card ref={ref} className={className}>
      {/* Header Section */}
      {title && (
        <Card.Header className={headerClassName}>
          <Stack direction="horizontal" gap={2} className="flex-wrap justify-content-between">
            <Stack className="align-self-center">
              {typeof title === 'string' ? <h5>{title}</h5> : title}
              {subheader && <small className="text-muted">{subheader}</small>}
            </Stack>
            {secondary}
          </Stack>
        </Card.Header>
      )}
      {/* Content */}
      {content && <Card.Body className={bodyClassName}>{children}</Card.Body>}
      {!content && children}
      {footer && <Card.Footer className={footerClassName}>{footer}</Card.Footer>}
    </Card>
  );
}

MainCard.propTypes = {
  children: PropTypes.node,
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  secondary: PropTypes.node,
  content: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  ref: PropTypes.object
};
