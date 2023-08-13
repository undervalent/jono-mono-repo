import React from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className='content-container'>
    {children}
  </section>
}
