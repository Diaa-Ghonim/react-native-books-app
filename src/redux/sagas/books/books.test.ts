import {getBooks as getBooksSaga} from '.';
import {
  failureResponse,
  fakeGetBooksFailAction,
  fakeGetBooksPendingAction,
  fakeGetBooksSuccessAction,
  fakeMainStateWithBooksState,
  getBooksSuccessResponse,
} from '../../../fakeData';
import {customRunSaga} from '../../../utils/test.helpers';
import {getBooksAPI} from '../../services';
import {
  ApiRequestErrorResponse,
  GetBooksRequestSuccessResponse,
} from '../../types';

jest.mock('../../services/books');
describe('Get books', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch two actions, firstly is pending then the success action with response if request success', async () => {
    (
      getBooksAPI as jest.Mock<Promise<GetBooksRequestSuccessResponse>>
    ).mockReturnValue(getBooksSuccessResponse);

    const dispatchedActions = await customRunSaga(
      fakeMainStateWithBooksState,
      getBooksSaga,
    );

    expect(getBooksAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual(fakeGetBooksPendingAction);
    expect(dispatchedActions[1]).toEqual(fakeGetBooksSuccessAction);
  });

  it('should dispatch two actions, firstly the pending then fail action if request fail', async () => {
    (
      getBooksAPI as jest.Mock<Promise<ApiRequestErrorResponse>>
    ).mockReturnValue(failureResponse);

    const dispatchedActions = await customRunSaga(
      fakeMainStateWithBooksState,
      getBooksSaga,
    );
    expect(getBooksAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual(fakeGetBooksPendingAction);
    expect(dispatchedActions[1]).toEqual(fakeGetBooksFailAction);
  });
});
