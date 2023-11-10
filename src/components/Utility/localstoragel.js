const getStoredDonateInfo = () => {
    const storedDonateInfo = localStorage.getItem('donate-info');
    if (storedDonateInfo) {
        return JSON.parse(storedDonateInfo);
    }
    return [];
}

const donateInfo = id => {
    const storedDonation = getStoredDonateInfo();
    const exists = storedDonation.find(donateId => donateId === id);
    if (!exists) {
        storedDonation.push(id);
        localStorage.setItem('donate-info', JSON.stringify(storedDonation));
    }
}

export { getStoredDonateInfo, donateInfo }