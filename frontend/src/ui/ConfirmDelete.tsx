type confirmDeleteProps = {
  resourseName: string;
  onClose: () => void;
  disabled: boolean;
  onConfirm: () => void;
};

function ConfirmDelete({
  resourseName,
  onClose,
  disabled,
  onConfirm,
}: confirmDeleteProps) {
  return (
    <div className="space-y-8">
      <p>آیا از حذف {resourseName} مطمئن هستید؟</p>
      <div className="w-full flex items-center justify-between gap-x-4">
        <button
          className="btn btn--primary"
          onClick={onClose}
          disabled={disabled}
        >
          انصراف
        </button>
        <button className="btn btn--danger py-3 flex-1" onClick={onConfirm}>
          حذف
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
