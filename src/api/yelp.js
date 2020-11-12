import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer RJVCHX_H7aictzgPy49yZvGNbfnG8pXDv3ZX94r8wWH59VVIsXa01nLm3ISKEPb_dtRcj4hpL3DkmXGiV1lTk_PSMGuCr1dtIP3zuYgi-GQlBOpi8YJvaZiFgFmsX3Yx'
    }
});
