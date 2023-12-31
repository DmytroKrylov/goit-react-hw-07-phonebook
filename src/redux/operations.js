import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64dddcfc825d19d9bfb1a000.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (erorr) {
      return thunkAPI.rejectWithValue(erorr.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (item, thunkAPI) => {
    console.log({ item });
    try {
      const response = await axios.post('/contacts', item);
      return response.data;
    } catch (erorr) {
      return thunkAPI.rejectWithValue(erorr.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (erorr) {
      return thunkAPI.rejectWithValue(erorr.message);
    }
  }
);
