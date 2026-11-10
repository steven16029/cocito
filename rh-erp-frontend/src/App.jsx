import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Page, 
  PageSidebar, 
  PageSidebarBody,
  Masthead, 
  MastheadMain, 
  MastheadToggle, 
  MastheadBrand, 
  MastheadContent,
  PageToggleButton, 
  Nav, 
  NavList, 
  NavItem, 
  Card, 
  CardBody,
  ActionGroup,
  Button
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import './i18n';

export default function App() {
  const { t, i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const header = (
    <Masthead id="international-erp-masthead">
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>RH International ERP</MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <ActionGroup style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <Button variant="secondary" onClick={() => changeLanguage('es')}>ES</Button>
          <Button variant="secondary" onClick={() => changeLanguage('en')}>EN</Button>
        </ActionGroup>
      </MastheadContent>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar isNavOpen={isSidebarOpen}>
      <PageSidebarBody>
        <Nav>
          <NavList>
            <NavItem itemId={0} isActive>{t('dashboard')}</NavItem>
            <NavItem itemId={1}>{t('finance')}</NavItem>
          </NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page header={header} sidebar={sidebar} style={{ height: '100vh' }}>
      <div style={{ padding: '20px' }}>
        <Card>
          <CardBody>
            <h1>{t('welcome')}</h1>
            <p>Monitoreo global y servicios de integración con Red Hat OpenShift Data Foundation y AMQ Streams.</p>
          </CardBody>
        </Card>
      </div>
    </Page>
  );
}
