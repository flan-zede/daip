
import * as Icon from 'react-feather';
export default function MainNavigation() {
  return (
    <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between px-4 py-3 border-top small">
      <p className="text-muted mb-1 mb-md-0">Copyright © 2022</p>
      <p className="text-muted">DAIP <Icon.Heart className="mb-1 text-primary ms-1 icon-sm"/></p>
    </footer>
  );
}

