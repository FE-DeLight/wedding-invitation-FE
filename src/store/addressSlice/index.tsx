import { createSlice } from '@reduxjs/toolkit';

interface Address {
  coordinate?: { lat: number; lng: number };
  showMap?: boolean;
  address?: string;
  detailAddress?: string;
  contact?: { person: string; phone: string };
  showDetail?: boolean;
}

const initialState: Address = {
  coordinate: { lat: 37.544641605, lng: 127.055896738 },
  showMap: false,
  address: '',
  detailAddress: '',
  contact: { person: '', phone: '' },
  showDetail: false,
};

const addressSlice = createSlice({
  name: 'addressSlice',
  initialState,
  reducers: {
    setAddress: (state: Address, action) => {
      state.address = action.payload.address;
    },
    setDetailAddress: (state: Address, action) => {
      state.detailAddress = action.payload.detailAddress;
    },
    setContact: (state: Address, action) => {
      state.contact = action.payload.contact;
    },
    setShowMap: (state, action) => {
      state.showMap = action.payload.showMap;
    },
    setCoordinate: (state, action) => {
      state.coordinate = action.payload.coordinate;
    },
    setShowDetail: (state, action) => {
      state.showDetail = action.payload.showDetail;
    },
  },
});

export const { setAddress, setDetailAddress, setContact, setShowMap, setCoordinate, setShowDetail } =
  addressSlice.actions;

export default addressSlice.reducer;
