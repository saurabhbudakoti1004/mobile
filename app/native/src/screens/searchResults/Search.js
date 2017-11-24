// @flow

import * as React from 'react';
import { graphql } from 'react-relay';

import SearchResultsContainer from './SearchResults';
import PublicApiRenderer from '../../components/relay/PublicApiRenderer';
import Layout from '../../components/visual/view/Layout';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

export default class Search extends React.Component<Props> {
  static navigationOptions = ({
    navigation: { state: { params } },
  }: Props) => ({
    title: `${params.from} - ${params.to}`,
  });

  render = () => {
    const { params } = this.props.navigation.state;
    return (
      <PublicApiRenderer
        query={SearchAllFlightsQuery}
        variables={{
          search: {
            from: { location: params.from.trim() },
            to: { location: params.to.trim() },
            date: { exact: new Date(params.date).toISOString().slice(0, 10) },
          },
          count: 50,
        }}
        render={props => {
          return (
            <Layout>
              <SearchResultsContainer
                flights={props}
                navigation={this.props.navigation}
              />
            </Layout>
          );
        }}
      />
    );
  };
}

const SearchAllFlightsQuery = graphql`
  query SearchResultsQuery(
    $search: FlightsSearchInput!
    $count: Int!
    $after: String
  ) {
    ...SearchResults_flights
  }
`;