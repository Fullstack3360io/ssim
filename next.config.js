/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        APP_NAME: 'SSIM Manager',
        APP_LOGO: '/images/img/login/Copa.png',
        APP_DESCRIPTION: 'This is an application to upload SSIM files',

        AZURE_AD_CLIENT_ID: '',
        AZURE_AD_CLIENT_SECRET: '',
        AZURE_AD_TENANT_ID: ''
    }
};

module.exports = nextConfig;
