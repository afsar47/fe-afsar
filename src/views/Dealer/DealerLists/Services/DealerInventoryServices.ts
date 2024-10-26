import axios from "axios";
import appConfig from "@/configs/app.config";
// Set the base URL to point to your backend API
const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL
// const API_BASE_URL = 'https://elstar-dev.onrender.com'; // Assuming backend is running on localhost:1024
const { apiPrefix } = appConfig; // If you have an API prefix like '/api'


export async function getAllParts() {
    try {
        // const response = await axios.get(`${API_BASE_URL}${apiPrefix}/dealer/get-all-parts`);
        const response = {
            "status": "success",
            "allParts": [
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },

                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Tins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670e771f769e3eb82a6e8b4b",
                    "partName": "Bins",
                    "partSerialNo": "171",
                    "partSku": "25",
                    "note": "77",
                    "quantity": 294,
                    "minQuantity": 210,
                    "maxQuantity": 180,
                    "bin": "Asperiores",
                    "cost": 489,
                    "retail": 646,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "Syed Adnan",
                            "lastName": "Ali",
                            "contactType": "",
                            "contactNumber": 7477008778,
                            "email": "syedadnanali8778@gmail.com"
                        },
                        "_id": "670e70ea3835ebc178cb690c",
                        "vendorName": "Ford JK",
                        "vendorUrl": "https://web.whatsapp.com/",
                        "vendorAccountNumber": "345634",
                        "vendorAddress1": "84 A Naveen Nagar, near Hind Convent School, Bhopal",
                        "vendorAddress2": "67814 McCullough Plains",
                        "vendorCity": "Bhopal",
                        "vendorState": "Madhya Pradesh",
                        "vendorZipCode": 462001,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670efeac2a7ddbd3592d87d9",
                    "partName": "Tester",
                    "partSerialNo": "0",
                    "partSku": "",
                    "note": "",
                    "quantity": null,
                    "minQuantity": null,
                    "maxQuantity": null,
                    "bin": "",
                    "cost": null,
                    "retail": null,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "",
                            "lastName": "",
                            "contactType": "",
                            "contactNumber": null,
                            "email": ""
                        },
                        "_id": "670e70863835ebc178cb6901",
                        "vendorName": "Tester 2",
                        "vendorUrl": "",
                        "vendorAccountNumber": "",
                        "vendorAddress1": "",
                        "vendorAddress2": "",
                        "vendorCity": "",
                        "vendorState": "",
                        "vendorZipCode": null,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670d80b2c5916d5c668cd384",
                        "label": "Apollo",
                        "__v": 0
                    },
                    "__v": 0
                },
                {
                    "_id": "670efee12a7ddbd3592d87ed",
                    "partName": "Tester 22222222222",
                    "partSerialNo": "0",
                    "partSku": "",
                    "note": "",
                    "quantity": 0,
                    "minQuantity": 0,
                    "maxQuantity": 0,
                    "bin": "",
                    "cost": null,
                    "retail": null,
                    "taxable": true,
                    "displaySerialOnEstimateAndInvoice": true,
                    "displayPriceAndQuantityOnEstimateAndInvoice": true,
                    "displayNoteOnEstimateAndInvoice": true,
                    "category": {
                        "_id": "670d7f6cc1b7e77f897e18cb",
                        "categoryName": "Category 1",
                        "__v": 0
                    },
                    "vendor": {
                        "vendorContactPerson": {
                            "firstName": "",
                            "lastName": "",
                            "contactType": "",
                            "contactNumber": null,
                            "email": ""
                        },
                        "_id": "670e70863835ebc178cb6901",
                        "vendorName": "Tester 2",
                        "vendorUrl": "",
                        "vendorAccountNumber": "",
                        "vendorAddress1": "",
                        "vendorAddress2": "",
                        "vendorCity": "",
                        "vendorState": "",
                        "vendorZipCode": null,
                        "__v": 0
                    },
                    "brand": {
                        "_id": "670e6d853835ebc178cb68d3",
                        "label": "Ford",
                        "__v": 0
                    },
                    "__v": 0
                }
            ]
        }
        return response; // Handle response (e.g., token, user data)
    } catch (error: any) {
        console.error('Get-All-Dealers error', error);
        throw error.response?.data || 'Error in getting all dealers';
    }
}

export async function apiNewPart (data:any){
    try{
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/dealer/add-new-part`,data);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in saving Part'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}

export async function apiGetAllBrand (){
    try{
        const response = await axios.get(`${API_BASE_URL}${apiPrefix}/dealer/get-all-brands`);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in saving Brand'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}

export async function apiGetAllVendor (){
    try{
        const response = await axios.get(`${API_BASE_URL}${apiPrefix}/dealer/get-all-vendors`);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in getting Vendors'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}

export async function apiAddNewBrand (data:any){
    try{
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/dealer/add-new-brand`,data);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in saving Brand'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}

export async function apiAddNewCategory (data:any){
    try{
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/dealer/add-new-category`,data);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in saving Category'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}


export async function apiGetAllCategtories (){
    try{
        const response = await axios.get(`${API_BASE_URL}${apiPrefix}/dealer/get-all-categories`);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in getting Categories'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}
