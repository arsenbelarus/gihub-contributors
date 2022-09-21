import axios from 'axios';
import { appConfig } from '../appConfig';

export const contributorsApi = axios.create({
	baseURL: appConfig.BASE_URL,
	headers: { Authorization: `Bearer ${appConfig.TOKEN}` },
});
