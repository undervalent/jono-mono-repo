import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { getIsModalActive } from "../../../../../../state/features/ui";
import { useAppSelector, useAppDispatch } from "../../../../../../state";
import * as Styled from "./modal.styles";
import { openModal, closeModal } from "../../../../../../state/features/ui";
import { Button, Input, Checkbox } from "../../../../../../shared-components";
import { useFilterData } from "../../../../../../lib/hooks";
import { MdLocationPin } from "react-icons/md";
import { useTheme } from "styled-components";
import { FaFilter } from "react-icons/fa";

interface State {
  isModalActive: boolean;
}
interface Handlers {
  handleOpenModal(): void;
  handleCloseModal(): void;
}
function useModal(): [State, Handlers] {
  const isModalActive = useAppSelector(getIsModalActive);
  const dispatch = useAppDispatch();

  const state = {
    isModalActive,
  };
  const handlers = {
    handleOpenModal: () => dispatch(openModal()),
    handleCloseModal: () => dispatch(closeModal()),
  };

  return [state, handlers];
}

export const Modal = () => {
  const [{ isModalActive }, { handleOpenModal, handleCloseModal }] = useModal();
  const [
    { fullTime, labels, locationQuery },
    { handleFullTime, handleLocation, handleFilter },
  ] = useFilterData();
  const theme: any = useTheme();

  return (
    <Dialog.Root open={isModalActive}>
      <Dialog.Trigger asChild>
        <Button purpose="secondary" width={30} onClick={handleOpenModal}>
          <FaFilter aria-label="Filter" size={20} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Styled.DialogOverlay />
        <Styled.DialogContent
          onInteractOutside={handleCloseModal}
          onEscapeKeyDown={handleCloseModal}
          onPointerDownOutside={handleCloseModal}
        >
          <Input
            type="text"
            onChange={handleLocation}
            value={locationQuery}
            icon={<MdLocationPin size="30px" color={theme?.colors?.violet} />}
            placeholder={labels.locationPlaceholder}
          />

          <Checkbox
            label={labels.checkboxLabel}
            isSelected={fullTime}
            onCheckboxChange={handleFullTime}
          />
          <Button purpose="primary" onClick={handleFilter}>
            Search
          </Button>
        </Styled.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
