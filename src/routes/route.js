import express from "express";
let router = express.Router();
import api from '../utils/api.js';
import { authNhanhVn } from '../utils/utils.js';
router.post('/product', async (req, res) => {
    let data = await authNhanhVn(api.product.all, JSON.stringify(req.body));
    res.json(Object.values(data?.data?.products));
});
router.post('/product/detail', async (req, res) => {
    let data = await authNhanhVn(api.product.detail, req.body?.idNhanh);
    res.send(Object.values(data?.data));
});
router.get(`/category`, async (req, res) => {
    let data = await authNhanhVn(api.product.category, "");
    res.send(data?.data);
});

router.get(`/locations`, async (req, res) => {
    let data = await authNhanhVn(api.location, JSON.stringify({
        "type": req.query?.type || "CITY",
        "parentId": req.query?.parentId || 0
    }));
    res.send(data?.data);
});

export { router }