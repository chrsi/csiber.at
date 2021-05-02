import { makeStyles } from "@material-ui/core";

/**
 * This hook provides styling classes for content on the page.
 * It is responsible for a consistent content layout throughout the page.
 */
export const useContentStyle = makeStyles(() => ({
  content: {
    width: '90vw',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))