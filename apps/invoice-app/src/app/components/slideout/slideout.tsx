import { Dialog } from 'radix-ui';
import { motion, AnimatePresence } from 'framer-motion';
import './slideout.styles.css';
import { getIsFormActive, setFormActive } from '../../state/ui';
import { useSelector, useDispatch } from 'react-redux';
import { EditForm } from '../../views/invoice/components/edit-form/edit-form.component';
import { NewForm } from '../../views/invoice/components/new-form/new-form.component';

export function SlideOut() {
  const dispatch = useDispatch();
  const showForm = useSelector(getIsFormActive);
  const form = showForm === 'edit' ? <EditForm /> : <NewForm />;
  const title = showForm === 'edit' ? 'Edit Invoice' : 'New Invoice';
  return (
    <Dialog.Root open={!!showForm}>
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
              <Dialog.Close
                className="sidebar-close"
                onClick={() => dispatch(setFormActive(''))}
              >
                <span className="close-icon">X</span>
              </Dialog.Close>
              {form}
            </motion.div>
          </Dialog.Content>
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
