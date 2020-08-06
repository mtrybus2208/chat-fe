export interface NavbarElements {
  id: string;
  path: string;
  label: string;
  access: () => boolean;
}

export const navbarElements: NavbarElements[] = [
  {
    id: 'navbarDashboard',
    path: '/dashboard',
    label: 'Dashboard',
    access: () => true,
  },
  {
    id: 'navbarChat',
    path: '/chat',
    label: 'Chat',
    access: () => true,
  },
];
