import ApiError from '@utils/ApiError';

const getStatusErrorMessage = (res) => {
  if (res.status >= 400 && res.status !== 404) {
    return true;
  }
  return false;
};

const fetchData = async (url, name) => {
  try {
    console.log(name);

    const response = await fetch(url);
    if (response.status === 404) return {};

    const statusErrorMessage = getStatusErrorMessage(response);
    if (statusErrorMessage)
      throw new ApiError(statusErrorMessage, 'status', response.status);

    return response.json();
  } catch (e) {
    if (e.type === 'status') {
      throw new ApiError(
        '서버 상태가 좋지 않습니다.  잠시 후 시도해주세요.',
        'api',
        e.status,
      );
    }

    throw new Error(e);
  }
};

export default fetchData;
