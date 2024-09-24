
from google.cloud import appengine
from google.cloud import modules
# core logic (inside a cron or other handler)
for m in modules.get_modules():
    dv = modules.get_default_version(m)
    for v in modules.get_versions(m):
        if v != dv: modules.stop_version(m, v)