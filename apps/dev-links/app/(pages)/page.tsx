'use client';
import * as React from 'react'

import { z } from 'zod';
import { useFormValidator } from '../hooks';

const formValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
})

export default async function Index() {
  const [state, handlers] = useFormValidator(formValidator)

  console.log('STUFF -->',{state, handlers})

  return (
    <div>
      test
    </div>
    );
}
