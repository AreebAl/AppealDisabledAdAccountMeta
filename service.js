const axios = require('axios');

async function appealAdAccount(adAccountId, parentBusinessId, accessToken, appId) {
  const url = `https://graph.facebook.com/v18.0/${parentBusinessId}/ad_review_requests`;

  const formData = new URLSearchParams();
  formData.append('ad_account_ids', JSON.stringify([adAccountId]));
  formData.append('app', appId);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const res = await axios.post(url, formData, { headers });
    return res.data;
  } catch (err) {
    console.error('Meta API Error:', err.response?.data || err.message);
    throw new Error(err.response?.data?.error?.message || 'Failed to create appeal request');
  }
}




async function appealBusinessManager(businessManagerId, parentBusinessId, accessToken, appId) {
  const url = `https://graph.facebook.com/v18.0/${parentBusinessId}/bm_review_requests`;

  const formData = new URLSearchParams();
  formData.append('business_manager_ids', JSON.stringify([businessManagerId]));
  formData.append('app', appId);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const res = await axios.post(url, formData, { headers });
    return res.data;
  } catch (err) {
    console.error('Meta API Error:', err.response?.data || err.message);
    throw new Error(err.response?.data?.error?.message || 'Failed to create BM appeal');
  }
}




module.exports = { appealAdAccount,appealBusinessManager };
