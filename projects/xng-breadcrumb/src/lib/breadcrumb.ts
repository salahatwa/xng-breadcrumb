/**
 * Breadcrumb item built internally, private to this module
 */
export interface Breadcrumb {
  /**
   * breadcrumb label for a route
   */
  label?: string;
  /**
   * unique alias name for a route path
   */
  alias?: string;
  /**
   * hide or show the breadcrumb item
   */
  skip?: boolean;
  /**
   * disable the link for the breadcrumb.
   * It may be needed when the routing has the path, but navigating to that path is of no use
   */
  disable?: boolean;
  /**
   * custom data for each breadcrumb that is passed back to ng-template
   */
  info?: any;
  /**
   * actual route path with resolved param. Ex /mentor/2, connect/edit
   */
  routeLink?: string;
  /**
   * route with path params converted to a RegExp
   * path '/mentor/:id' becomes routeRegex '/mentor/[^/]+', which can be matched against when needed
   */
  routeRegex?: string;
  /**
   * This is additional info on each breadcrumb item whether label is auto generated or user specified
   * isAutoGeneratedLabel has to be present at component level but not at the service,
   * since we may need to support multiple breadcrumb components in same app
   */
  isAutoGeneratedLabel?: boolean;
}
