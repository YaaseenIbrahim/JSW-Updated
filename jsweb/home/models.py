from django.db import models

class Test(models.Model):
    attachment = models.FileField()
