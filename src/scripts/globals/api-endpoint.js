import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}refood`,
  DETAIL: (idLimbah) => `${CONFIG.BASE_URL}refood/${idLimbah}`,
  ADD_REFOOD: (idLimbah) => `${CONFIG.BASE_URL}refood/${idLimbah}`,
  EDIT_REFOOD: (idLimbah, idPengolahan) => `${CONFIG.BASE_URL}refood/${idLimbah}/${idPengolahan}`,
  DELETE_REFOOD: (idLimbah, idPengolahan) => `${CONFIG.BASE_URL}refood/${idLimbah}/${idPengolahan}`,
};

export default API_ENDPOINT;
