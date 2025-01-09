interface TitleResponse {
    title?: string
    error: Error
    response?: AxiosResponse<any, any>
    body?: any
}

/**
 * Retrieves the title at url and uses the callback to return that title
 * @name getTitleAtUrl
 * @param {String} url - A url to a webpage to retrieve a title from.
 * title has been retrieved.  Invoked with (title, responseError)
 */
export default function getTitleAtUrl(url: string): Promise<TitleResponse>
