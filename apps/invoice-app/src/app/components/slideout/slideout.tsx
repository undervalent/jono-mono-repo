import { Dialog } from 'radix-ui';
import { motion, AnimatePresence } from 'framer-motion';
import './slideout.styles.css';
import { getActiveForm } from '@state/ui';
import { useSelector } from 'react-redux';
import { EditForm } from '@components/edit-form/edit-form.component';

export function SlideOut() {
  const activeForm = useSelector(getActiveForm);
  const title = activeForm === 'edit' ? 'Edit Invoice' : 'New Invoice';

  return (
    <Dialog.Root open={!!activeForm}>
      <Dialog.Portal>
        <Dialog.Overlay className="sidebar-overlay" />

        <AnimatePresence>
          <Dialog.Content forceMount>
            <Dialog.Title asChild>
              <h2 className="dialog-header">{title}</h2>
            </Dialog.Title>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="sidebar-content"
            >
              <EditForm />
            </motion.div>
          </Dialog.Content>
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
