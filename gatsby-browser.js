/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
export const onServiceWorkerUpdateReady = async args => {
  // eslint-disable-next-line no-undef
  const permissionResponse = await Notification.requestPermission()
  if (permissionResponse === "granted") {
    await args.serviceWorker.showNotification("Website update", {
      body:
        "Our website just got a little bit better. We reloaded the site with the update to ensure a smooth experience for you.",
    })
  }
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const registerServiceWorker = () => true
