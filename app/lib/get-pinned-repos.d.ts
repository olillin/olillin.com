// Copyright © 2022 Barış DEMİRCİ <demirci.baris38@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// This declaration file has been modified to be converted into a module and fix some types.

declare module 'get-pinned-repos' {
    /**
     * Repo language
     * @property name - Language name code
     * @property color - Language color
     * @property id - Language id in Github database
     */
    export type ILanguage = {
        name: string
        color: string
        id: string
    }

    /**
     * Pinned Repo type
     * @property name - Repo name
     * @property url - Repo URL
     * @property stargazerCount - Stargazer count
     * @property primaryLanguage - Repo primary language
     * @property description - Repo description
     * @property createdAt - Repo creation date
     * @property forkCount - Repo fork count
     * @property homepageUrl - Repo homepage url
     * @property id - Repo id
     * @property isArchived - Is repo archived?
     * @property isFork - Is repo a fork of another repo?
     * @property isInOrganization - Is repo in an organization?
     * @property isTemplate - Is repo a template?
     * @property languages - All languages used in repo
     */
    export type IPinnedRepo = {
        name: string
        url: string
        stargazerCount: string
        primaryLanguage: ILanguage
        description: string
        createdAt: string
        forkCount: number
        homepageUrl: string
        id: string
        isArchived: boolean
        isFork: boolean
        isInOrganization: boolean
        isTemplate: boolean
        languages: ILanguage[]
    }

    /**
     * Response Type, includes the pinned repos
     * @property user - Github user GQL response
     * @property user.pinnedItems - Github user pinned repo GQL reponse
     * @property user.pinnedItems.nodes - All pinned items
     */
    export type IRes = {
        user: {
            pinnedItems: {
                nodes: IPinnedRepo[]
            }
        }
    }

    /**
     * Main client class
     */
    export class Client {
        /**
         * Sets the global access token
         * @param token - Github personal access token
         */
        static setToken(token: string): void
        /**
         * Gets the specified user's pinned repos
         * @param username - User to fetch pinned repos of
         * @returns All pinned repos
         */
        static getPinnedRepos(username: string): Promise<IPinnedRepo[]>
    }
}
