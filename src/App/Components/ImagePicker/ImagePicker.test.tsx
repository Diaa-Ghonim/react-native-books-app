import 'react-native';
import React from 'react';
import {renderWithState} from '../../../utils/ui-test.helpers';
import ImagePicker from '.';

describe('Components - ImagePicker ', () => {
  it('renders ImagePicker Wrapper component with upload thumbnail button', () => {
    const {getByText} = renderWithState(
      <ImagePicker photo={null} setPhoto={() => {}} />,
    );
    const uploadThumbnail = getByText('Upload Thumbnail');
    expect(uploadThumbnail).toBeTruthy();
  });

  it('shoud render image to preview when we pass photo prop', () => {
    const fakePhotoAsset = {uri: 'fake uri'};
    const {getByTestId} = renderWithState(
      <ImagePicker photo={fakePhotoAsset} setPhoto={() => {}} />,
    );
    const uploadedPhoto = getByTestId('previewedImage');
    expect(uploadedPhoto).toBeTruthy();
  });
});
