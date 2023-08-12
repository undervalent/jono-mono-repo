import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme.colors.darkOverlay};
  position: fixed;
  inset: 0;
`;

export const DialogContent = styled(Dialog.Content)`
  background: ${({ theme }) => theme.elementBackground};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme }) => theme.elevation.lifted};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85v;
  padding: ${({ theme }) => theme.spacing.size6};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.size6};
`;
