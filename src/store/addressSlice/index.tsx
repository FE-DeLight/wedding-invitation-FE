import { createSlice } from '@reduxjs/toolkit';

interface Address {
  coordinate?: { lat: number; lng: number };
  showMap?: boolean;
  address?: string;
  detailAddress?: string;
  contactPerson?: string;
  contactNumber?: string;
  showDetail?: boolean;
}

const initialState: Address = {
  coordinate: { lat: 37.544641605, lng: 127.055896738 },
  showMap: false,
  address: '',
  detailAddress: '',
  contactPerson: '',
  contactNumber: '',
  showDetail: false,
};

const addressSlice = createSlice({
  name: 'addressSlice',
  initialState,
  reducers: {
    setAddress: (state: Address, action) => {
      state.address = action.payload.address;
      state.detailAddress = action.payload.detailAddress;
      state.contactPerson = action.payload.contactPerson;
      state.contactNumber = action.payload.contactNumber;
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

export const { setAddress, setShowMap, setCoordinate, setShowDetail } = addressSlice.actions;

export default addressSlice.reducer;
