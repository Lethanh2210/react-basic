import React from 'react';
import "./productDetail.css"
import {useParams} from "react-router-dom";
import {useGetApi} from "../../hooks/getApiHooks";
import LoadingScreen from "react-loading-screen";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProductDetail() {
    const {id} = useParams();
    const {data, loading} = useGetApi({url: `http://localhost:5000/api/products/${id}`})
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<div>
        {loading &&
            <LoadingScreen
                loading={true}
                bgColor="#f1f1f1"
                spinnerColor="#9ee5f8"
                textColor="#676767"
                text="Loading..."
            />
        }
            <h1 style={{textAlign: "center"}}>Detail Product</h1>
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">

                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={data?.image}/>
                                </div>
                            </div>

                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{data?.name}</h3>
                            <div className="rating">
                                <div className="stars">
                                </div>
                            </div>
                            <p className="product-description">{data?.description}</p>
                            <h4 className="price">current price: <span>${Math.floor(data?.price)}</span></h4>
                            <h5 className="sizes">
                                type: {data?.product}
                            </h5>
                            <h5 className="colors">
                                colors: {data?.color}
                            </h5>
                            <h5>
                                Create at: {data?.createAt}
                            </h5>
                            <div className="action">
                                <button className="add-to-cart btn btn-default" type="button" onClick={handleOpen}>Edit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="Name"
                               aria-describedby="emailHelp" defaultValue={data?.name} name="name"/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" id="Price"
                               aria-describedby="emailHelp" defaultValue={data?.price} name="price"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" id="description"
                                defaultValue={data?.description} name="description"/>
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <input type="text" className="form-control" id="product"
                               defaultValue={data?.product} name="product"/>
                    </div>
                    <div className="form-group">
                        <label>Color</label>
                        <input type="text" className="form-control" id="color"
                                defaultValue={data?.color} name="color"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Box>
        </Modal>
        </div>);
}

export default ProductDetail;