const prod = {
    url: {
     API_URL: 'https://deanemanagement.com/',
    }
};
const dev = {
    url: {
        API_URL: 'http://localhost:4000'
    }
};

const uat = {
    url: {
        API_URL: 'http://localhost:4000'
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : 'uat' ? uat : prod;