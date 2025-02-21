import Dialog from "@mui/material/Dialog";

export default function GenericModal({ open, onClose, title, children }) {
  return (
    <>
    <Dialog onClose={onClose} open={open}>
      <div className="container p-4">
        <div className="row row-cols-1 g-4">
          
           <div className="col">
                  <h3>{title}</h3>
                  </div>
          {children}
          
          </div>
      </div>
    </Dialog>
    </>
  );
}
