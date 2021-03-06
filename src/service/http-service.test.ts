import {HttpService} from './http-service';

describe('Http Service', () => {
    it('should return the response on success', (done) => {
        const mockResponse = 'response';
        const clientMock = {
            get: jest.fn().mockResolvedValue(new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(mockResponse);
                }, 100, 'foo');
            }))
        };
        const clientMockFactory: any = () => clientMock;
        const httpService = new HttpService(clientMockFactory);
        httpService.get('test', {}).subscribe((response: any) => {
            expect(response).toEqual(mockResponse);
            done();
        });
    });

    it('should return the error on reject', (done) => {
        const mockError = 'response';
        const clientMock: any =  {
            get: jest.fn().mockResolvedValue(new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(mockError);
                }, 100, 'foo');
            }))
        };
        const clientMockFactory: any = () => clientMock;
        const httpService = new HttpService(clientMockFactory);
        httpService.get('test', {}).subscribe(() => {}, (response: any) => {
            expect(response).toEqual(mockError);
            done();
        });
    });
});