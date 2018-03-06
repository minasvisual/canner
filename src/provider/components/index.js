// @flow

import * as React from 'react';
import Provider from './Provider';
import Generator from './Generator';
import type {Node} from './Generator';
import type Endpoint from '../endpoint';

type Props = {
  schema: {
    schema: {[key: string]: any},
    endpoint: {[key: string]: Endpoint},
    componentTree: {[key: string]: Node}
  },
  dataDidChange: void => void,
  children: React.ChildrenArray<React.Node>,

  componentTree: {[string]: Node},
  plugins: {[string]: React.ComponentType<*>},
  hocs: {[string]: React.ComponentType<*>},
  containers: {[string]: React.ComponentType<*>},
  goTo: (path: string) => void,
  baseUrl: string,
  routes: Array<string>,
  params: {[string]: string},
}

class CannerCMS extends React.Component<Props> {
  static defaultProps = {
    schema: {
      schema: {},
      componentTree: {},
      endpoint: {},
    },
    endpoint: {},
    dataDidChange: () => {},
    componentTree: {},
    plugins: {},
    hocs: {},
    containers: {},
    goTo: () => {},
    baseUrl: '',
    routes: [],
    params: {},
  }

  render() {
    const {
      schema,
      dataDidChange,
      plugins,
      hocs,
      containers,
      goTo,
      baseUrl,
      routes,
      params,
    } = this.props;
    return (
      <Provider
        schema={schema.schema}
        endpoint={schema.endpoint}
        dataDidChange={dataDidChange}
      >
        <Generator
          componentTree={schema.componentTree}
          plugins={plugins}
          hocs={hocs}
          containers={containers}
          goTo={goTo}
          baseUrl={baseUrl}
          routes={routes}
          params={params}
        />
      </Provider>
    );
  }
}

export default CannerCMS;
