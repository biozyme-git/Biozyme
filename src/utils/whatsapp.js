const PRIMARY_NUMBER = '919421105300';

export function buildWhatsAppUrl(number = PRIMARY_NUMBER, message = '') {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function buildRFQMessage(formData) {
  const lines = [
    `*New RFQ from Biozyme Website*`,
    ``,
    `*Company:* ${formData.company || 'N/A'}`,
    `*Contact Person:* ${formData.name || 'N/A'}`,
    `*Industry:* ${formData.industry || 'N/A'}`,
    `*Required Volume:* ${formData.volume || 'N/A'}`,
    `*Packaging:* ${formData.packaging || 'N/A'}`,
    `*Frequency:* ${formData.frequency || 'N/A'}`,
    `*Delivery Location:* ${formData.location || 'N/A'}`,
    `*Email:* ${formData.email || 'N/A'}`,
    `*Message:* ${formData.message || 'N/A'}`,
  ];
  return lines.join('\n');
}

export function openWhatsAppRFQ(formData) {
  const message = buildRFQMessage(formData);
  const url = buildWhatsAppUrl(PRIMARY_NUMBER, message);
  window.open(url, '_blank');
}
