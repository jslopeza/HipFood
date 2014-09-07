# What is this?

This is a basic project that demonstrates how to quickly get started developing a HipChat integration using [ac-koa-hipchat](https://bitbucket.org/rbergman/ac-koa-hipchat).

It uses a basic [Vagrant](https://www.vagrantup.com) configuration to provide one option for quickly getting started with a basic setup using the following dependencies:

* Node.js 0.11.13
* Redis 2.8.14 or later
* ngrok and nodemon
* a simple example addon

# How do I use it?

Start by cloning this project from git:

```
git clone https://bitbucket.org/rbergman/ac-koa-hipchat-vagrant hipchat-example
```

Edit the `package.json` file and give your project unique name and author fields, at least.

You'll also need to install [Vagrant](https://www.vagrantup.com).  When that's done, run the following commands:

```
> cd /path/to/hipchat-example
> vagrant up
# a few minutes later....
> vagrant ssh
Welcome to your Vagrant-built virtual machine.
Last login: Sun Sep  7 06:03:27 2014 from 10.0.2.2
$ cd project
$ npm run tunnel
info: Atlassian Connect add-on started at https://xxxxxxxx.ngrok.com
```

You should now have an installable HipChat integration running at some unique url, like `https://xxxxxxxx.ngrok.com`, where the `xxxxxxxx` value will be a unique id for your server.

The `project` directory in /home/vagrant in the guest VM is a share that mounts the cloned git repository on your host OS.  You can do your development either in the VM or, more likely, using your favorite editor or IDE running in the host OS.

```
TODO: point to instructions for installing and testing the integration.
```
