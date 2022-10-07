import axios from 'axios';
import { BASE_URL, TOKEN } from '../appConfig';

export const contributorsApi = axios.create({
	baseURL: BASE_URL,
	headers: { Authorization: `Bearer ${TOKEN}` },
});
