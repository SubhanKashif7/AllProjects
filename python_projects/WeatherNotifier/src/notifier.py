from plyer import notification

# Send a notification
def notify(title,message):
    notification.notify(
        title=f'{title}',
        message=f'{message}',
        app_name='Weather App',  # optional
        timeout=13  # optional
    )
