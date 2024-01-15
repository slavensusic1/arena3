export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';
import './astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';

const page = () => import('./pages/about_ab3ebde2.mjs').then(n => n.i);

export { page };
