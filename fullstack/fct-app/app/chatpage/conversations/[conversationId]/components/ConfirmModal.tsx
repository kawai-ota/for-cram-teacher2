"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import ConversationId from "../page";
import useConversation from "@/app/chatpage/hooks/useConversation";
import axios from "axios";
import toast from "react-hot-toast";
import Modal from "@/app/chatpage/components/Modal";
import { FiAlertTriangle } from "react-icons/fi";
import { Dialog } from "@headlessui/react";
import Button from "../../../components/Button";
interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);
  const onDelete = useCallback(() => {
    setIsLoading(true);
    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/chatpage/conversations");
        router.refresh();
      })
      .catch(() => toast.error("問題が起きました"))
      .finally(() => setIsLoading(false));
  }, [conversationId, router, onClose]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 justify-center items-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <FiAlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            会話の削除
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              この会話を本当に削除しますか？ 削除した場合、元には戻せません。
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <Button disabled={isLoading} danger onClick={onDelete}>
          削除
        </Button>
        <Button disabled={isLoading} secondary onClick={onClose}>
          閉じる
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
