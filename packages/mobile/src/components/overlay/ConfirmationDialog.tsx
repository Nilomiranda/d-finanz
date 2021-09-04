import { AlertDialog, Center, Button } from 'native-base'
import React, { useRef } from 'react'

interface ConfirmationDialogProps {
  isOpen: boolean

  confirmationButtonLabel?: string
  confirmationButtonAction: () => void

  cancelButtonLabel?: string
  cancelButtonAction: () => void

  onClose: () => void

  header?: string
  message: string
}

const ConfirmationDialog = ({
  confirmationButtonAction,
  cancelButtonAction,
  isOpen,
  onClose,
  message,
  confirmationButtonLabel = 'Yes',
  cancelButtonLabel = 'No',
  header = 'Are you sure?'
}: ConfirmationDialogProps) => {
  const cancelRef = useRef(null)

  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.Header>{header}</AlertDialog.Header>
          <AlertDialog.Body>{message}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="danger" variant="outline" onPress={confirmationButtonAction}>{confirmationButtonLabel}</Button>
            <Button onPress={cancelButtonAction} ml={4}>{cancelButtonLabel}</Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  )
}

export default ConfirmationDialog
