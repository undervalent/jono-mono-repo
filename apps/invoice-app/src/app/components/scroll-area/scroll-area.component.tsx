import React from 'react';
import { ScrollArea as RadixScrollArea } from 'radix-ui';
import './scroll-area.styles.css';

export function ScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <RadixScrollArea.Root className="scroll-area__root">
      <RadixScrollArea.Viewport className="scroll-area__viewport">
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar
        className="scroll-area__scrollbar"
        orientation="vertical"
      >
        <RadixScrollArea.Thumb className="scroll-area__thumb" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="scroll-area__scrollbar"
        orientation="horizontal"
      >
        <RadixScrollArea.Thumb className="scroll-area__thumb" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className="scroll-area__corner" />
    </RadixScrollArea.Root>
  );
}

export default ScrollArea;
