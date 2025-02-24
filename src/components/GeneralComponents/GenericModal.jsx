import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
export default function GenericModal({ open, onClose, title, children }) {
  return (
    <>
      <Dialog onClose={onClose} open={open}>
        <div className="container p-4">
          <div className="row row-cols-1 g-4">
            <div className="col position-relative   ">
              <div onClick={onClose} className=" end-0 position-absolute top-50  translate-middle-y me-3">
                <CloseIcon />
              </div>
              <h3>{title}</h3>
            </div>
            <div className="mt-0">

              <hr />
            </div>
            {children}
          </div>
        </div>
      </Dialog>
    </>
  );
}
