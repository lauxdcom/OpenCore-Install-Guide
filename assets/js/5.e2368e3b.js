(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{326:function(e,t,a){e.exports=a.p+"assets/img/format-usb.83a24b13.png"},425:function(e,t,a){e.exports=a.p+"assets/img/gib-default.a4d282a1.png"},426:function(e,t,a){e.exports=a.p+"assets/img/10-16-ver.ba9bab99.png"},427:function(e,t,a){e.exports=a.p+"assets/img/dev-cat.61677859.png"},428:function(e,t,a){e.exports=a.p+"assets/img/big-sur-download.d628f24f.png"},429:function(e,t,a){e.exports=a.p+"assets/img/final-download.3c533738.png"},430:function(e,t,a){e.exports=a.p+"assets/img/install-pkg.f47a1e5c.png"},431:function(e,t,a){e.exports=a.p+"assets/img/done.d6ea4a58.png"},432:function(e,t,a){e.exports=a.p+"assets/img/cs-stuck.bddc4a2d.jpg"},433:function(e,t,a){e.exports=a.p+"assets/img/rtc-error.d53fdc66.jpg"},434:function(e,t,a){e.exports=a.p+"assets/img/ramrod.55591fc5.jpg"},435:function(e,t,a){e.exports=a.p+"assets/img/acpi-path.e72cc3e9.png"},573:function(e,t,a){"use strict";a.r(t);var s=a(25),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"opencore-and-macos-11-big-sur"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opencore-and-macos-11-big-sur"}},[e._v("#")]),e._v(" OpenCore and macOS 11: Big Sur")]),e._v(" "),s("p",[e._v("It's that time of year again and with it, and a new macOS beta has been dropped. Here's all the info you need to get started.")]),e._v(" "),s("p",[s("strong",[e._v("Reminder that Dortania and any tools mentioned in this guide are neither responsible for any corruption, data loss, or other ill effects that may arise from this guide, including ones caused by typos. You, the end user, must understand this is beta software on unsupported machines so do not pester developers for fixes. Dortania will not be accepting issues regarding this mini-guide except for typos and/or errors.")])]),e._v(" "),s("p",[s("strong",[e._v("This guide expects you to have a basic understanding of hackintoshing. If you are not familiar with it, we highly recommend you to wait until there is an easier and more straight-forward solution available.")])]),e._v(" "),s("h2",{attrs:{id:"backstory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backstory"}},[e._v("#")]),e._v(" Backstory")]),e._v(" "),s("p",[e._v("More a mini-explainer as to why this release is a bit more painful than average macOS releases, the main culprits are as follows:")]),e._v(" "),s("h3",{attrs:{id:"avoidruntimedefrag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avoidruntimedefrag"}},[e._v("#")]),e._v(" AvoidRuntimeDefrag")]),e._v(" "),s("p",[e._v("With macOS Big Sur, the "),s("code",[e._v("AvoidRuntimeDefrag")]),e._v(" Booter quirk in OpenCore broke. Because of this, the macOS kernel will fall flat when trying to boot. Reason for this is due to "),s("code",[e._v("cpu_count_enabled_logical_processors")]),e._v(" requiring the MADT (APIC) table, and so OpenCore will now ensure this table is made accessible to the kernel. Users will however need a build of OpenCore 0.6.0 with commit "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/commit/9f59339e7eb8c213e84551df0fdbf9905cd98ca4",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("bb12f5f")]),s("OutboundLink")],1),e._v(" or newer to resolve this issue.")]),e._v(" "),s("h3",{attrs:{id:"kernel-collections-vs-prelinkedkernel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kernel-collections-vs-prelinkedkernel"}},[e._v("#")]),e._v(" Kernel Collections vs prelinkedkernel")]),e._v(" "),s("p",[e._v("Since 10.7, the prelinkedkernel has been the default way for real macs to boot. This contained a very minimal amount of kexts to get a mac booted. This same bundle is what OpenCore uses to inject kexts, and was hoped to last quite some time. With macOS Big Sur, a huge change happened in where Apple no longer makes it the default form of booting.")]),e._v(" "),s("p",[e._v("Due to the hard work of "),s("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[e._v("@acidanthera"),s("OutboundLink")],1),e._v(", OpenCore gained experimental support for this new format in roughly 2 weeks, and we can now attempt to boot Big Sur on our hackintoshes without a Mac or VM - although you will likely run into some issues along the way.")]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("Before we can jump head first into installing Big Sur, we need to go over a few things:")]),e._v(" "),s("h3",{attrs:{id:"a-supported-smbios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-supported-smbios"}},[e._v("#")]),e._v(" A supported SMBIOS")]),e._v(" "),s("p",[e._v("Big Sur dropped a few Ivy Bridge and Haswell based SMBIOS from macOS, so see below that yours wasn't dropped:")]),e._v(" "),s("ul",[s("li",[e._v("iMac14,3 and older\n"),s("ul",[s("li",[e._v("Note iMac14,4 is still supported")])])]),e._v(" "),s("li",[e._v("MacPro5,1 and older")]),e._v(" "),s("li",[e._v("MacMini6,x and older")]),e._v(" "),s("li",[e._v("MacBook7,1 and older")]),e._v(" "),s("li",[e._v("MacBookAir5,x and older")]),e._v(" "),s("li",[e._v("MacBookPro10,x and older")])]),e._v(" "),s("p",[e._v("If your SMBIOS was supported in Catalina and isn't included above, you're good to go!")]),e._v(" "),s("p",[e._v("For those wanting a simple translation for their Ivy and Haswell Machines:")]),e._v(" "),s("ul",[s("li",[e._v("iMac13,2, iMac14,2 and iMac14,3 should transition over to using iMac15,1")]),e._v(" "),s("li",[e._v("iMac14,1 should transition over to iMac14,4")])]),e._v(" "),s("h3",{attrs:{id:"supported-hardware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported hardware")]),e._v(" "),s("p",[e._v("Not much hardware has been dropped, though the few that have:")]),e._v(" "),s("ul",[s("li",[e._v("Official Ivy Bridge U, H and S CPUs.\n"),s("ul",[s("li",[e._v("These CPUs will still boot without much issue, but note that no Macs are supported with consumer Ivy Bridge in Big Sur.")]),e._v(" "),s("li",[e._v("Ivy Bridge-E CPUs are still supported thanks to being in MacPro6,1")])])]),e._v(" "),s("li",[e._v("Ivy Bridge iGPUs.\n"),s("ul",[s("li",[e._v("HD 4000 and HD 2500, initial developer beta forgot to remove drivers but more than likely to be removed in later updates.")])])]),e._v(" "),s("li",[e._v("BCM94331CD based Wifi cards.\n"),s("ul",[s("li",[e._v("See "),s("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wireless Buyers guide"),s("OutboundLink")],1),e._v(" for potential cards to upgrade to.")])])]),e._v(" "),s("li",[e._v("Certain SATA controllers dropped\n"),s("ul",[s("li",[e._v("For some reason, Apple removed the AppleIntelPchSeriesAHCI class from AppleAHCIPort.kext. Due to the outright removal of the class, trying to spoof to another ID (generally done by SATA-unsupported.kext) can fail for many and create instability for others.")]),e._v(" "),s("li",[e._v("A partial fix is to block Big Sur's AppleAHCIPort.kext and inject Catalina's version with any conflicting symbols being patched. You can find a sample kext here: "),s("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/CtlnaAHCIPort.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Catalina's patched AppleAHCIPort.kext"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("This will work in both Catalina and Big Sur so you can remove SATA-unsupported if you want.")])])])]),e._v(" "),s("p",[e._v("Also note that AMD OSX has updated their patches, but they are experimental and unsupported and you will not obtain support for them:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla/tree/experimental-opencore",target:"_blank",rel:"noopener noreferrer"}},[e._v("Experimental Patches"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("And a special note for MSI Navi users, you no longer require the "),s("code",[e._v("ATY,rom")]),e._v("/"),s("code",[e._v("-wegnoegpu")]),e._v(" patch to boot the installer!")]),e._v(" "),s("h3",{attrs:{id:"up-to-date-kexts-bootloader-and-config-plist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#up-to-date-kexts-bootloader-and-config-plist"}},[e._v("#")]),e._v(" Up-to-date kexts, bootloader and config.plist")]),e._v(" "),s("p",[e._v("Ensure you've updated to the latest builds (not releases) of OpenCore and all your kexts, as to avoid any odd incompatibility issues. You can find the latest builds of kexts and OpenCore here:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://kexts.goldfish64.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kext Repo"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://drivers.goldfish64.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Driver Repo (contains OpenCore builds too)"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("You will also need to ensure you have a few NVRAM variables set:")]),e._v(" "),s("ul",[s("li",[s("strong",[s("code",[e._v("NVRAM")]),e._v(" -> "),s("code",[e._v("Add")]),e._v(" -> "),s("code",[e._v("7C436110-AB2A-4BBB-A880-FE41995C9F82")])]),e._v(":\n"),s("ul",[s("li",[s("code",[e._v("boot-args")]),e._v(":\n"),s("ul",[s("li",[s("s",[s("code",[e._v("-lilubetaall")])]),e._v(" "),s("ul",[s("li",[e._v("Newest builds of Lilu(v1.4.6+) and most plugins do not require this boot-arg")])])]),e._v(" "),s("li",[s("s",[s("code",[e._v("vsmcgen=1")])]),e._v(" "),s("ul",[s("li",[e._v("Newest builds of Lilu(v1.4.6+) and VirtualSMC(v1.1.5+) don't need this boot-arg")])])]),e._v(" "),s("li",[s("s",[s("code",[e._v("-disablegfxfirmware")])]),e._v(" "),s("ul",[s("li",[e._v("Newer builds of WhateverGreen(v1.4.1+) resolves this")])])])])])])])]),e._v(" "),s("h3",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),s("p",[e._v("With Big Sur, quite a bit broke. Mainly the following:")]),e._v(" "),s("ul",[s("li",[e._v("Lilu\n"),s("ul",[s("li",[e._v("Mainly user-space patching has severely broke, meaning certain patches like DRM don't work")]),e._v(" "),s("li",[e._v("Kernel-space should be working correctly with v1.4.6, but plugins may require updates due to a complete rewrite of the patcher for Kernel Collection support.")])])]),e._v(" "),s("li",[e._v("VirtualSMC\n"),s("ul",[s("li",[s("s",[e._v("Some users may notice that even with "),s("code",[e._v("vsmcgen=1")]),e._v(" in boot-args, you'll still have VirtualSMC failing. To work around this, you may need to use FakeSMC till vSMC and Lilu issues are resolved.")])]),e._v(" "),s("li",[e._v("Resolved with v1.1.5+")])])]),e._v(" "),s("li",[e._v("Battery status\n"),s("ul",[s("li",[s("s",[e._v("Currently RehabMan's "),s("a",{attrs:{href:"https://bitbucket.org/RehabMan/os-x-acpi-battery-driver/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPIBatteryManager"),s("OutboundLink")],1),e._v(" is the only working kext for battery status.")])]),e._v(" "),s("li",[e._v("Resolved with VirtualSMC v1.1.5+")])])]),e._v(" "),s("li",[e._v("AirportBrcmFixup\n"),s("ul",[s("li",[e._v("Forcing a specific driver to load with "),s("code",[e._v("brcmfx-driver=")]),e._v(" may help")]),e._v(" "),s("li",[e._v("BCM94352Z users for example may need "),s("code",[e._v("brcmfx-driver=2")]),e._v(" in boot-args to resolve this, other chipsets will need other variables.")])])]),e._v(" "),s("li",[e._v("Intel HEDT hackintoshes failing to boot\n"),s("ul",[s("li",[e._v("This is due to Asus and many other OEMs excluding certain regions from your RTC device, to resolve this we can create a new RTC device with the proper regions.")]),e._v(" "),s("li",[e._v("OpenCorePkg includes a sample SSDT that goes in-depth: "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-RTC0-RANGE.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-RTC0-RANGE.dsl"),s("OutboundLink")],1)])])])]),e._v(" "),s("p",[e._v("And while not an issue, SIP has now gained a new bit so to properly disable SIP you need to set "),s("code",[e._v("csr-active-config")]),e._v(" to "),s("code",[e._v("FF0F0000")]),e._v(". See here for more info: "),s("RouterLink",{attrs:{to:"/troubleshooting/troubleshooting.html#disabling-sip"}},[e._v("Disabling SIP")])],1),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[e._v("For the installation, you'll need a few things:")]),e._v(" "),s("ul",[s("li",[e._v("macOS Big Sur installer")]),e._v(" "),s("li",[e._v("12GB+ USB drive")]),e._v(" "),s("li",[e._v("A Mac, hack, or pre-existing VM to download the installer and create install media")]),e._v(" "),s("li",[e._v("Latest builds of OpenCore and kexts (see above)")])]),e._v(" "),s("h3",{attrs:{id:"grabbing-the-installer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grabbing-the-installer"}},[e._v("#")]),e._v(" Grabbing the installer")]),e._v(" "),s("p",[e._v("To grab the Big Sur installer, download the beta profile from Apple's developer portal, then check for updates in System Preferences. If you don't have a developer account, you can use gibMacOS to download it:")]),e._v(" "),s("p",[e._v("Download "),s("a",{attrs:{href:"https://github.com/corpnewt/gibMacOS",target:"_blank",rel:"noopener noreferrer"}},[e._v("gibMacOS"),s("OutboundLink")],1),e._v(" and open "),s("code",[e._v("gibMacOS.command")]),e._v(":")]),e._v(" "),s("p",[s("img",{attrs:{src:a(425),alt:""}})]),e._v(" "),s("p",[e._v("Press "),s("code",[e._v("M")]),e._v(" to change the Max OS, then enter "),s("code",[e._v("10.16")]),e._v(" to switch the (update) catalog to the Big Sur one.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(426),alt:""}})]),e._v(" "),s("p",[e._v("Press "),s("code",[e._v("C")]),e._v(" to change the catalog, then select the number for the developer catalog.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(427),alt:""}})]),e._v(" "),s("p",[e._v("Select the number for the Big Sur beta to start downloading it.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(428),alt:""}})]),e._v(" "),s("p",[e._v("Once finished, open the InstallAssistant.pkg that was downloaded - it will be located in the "),s("code",[e._v("gibMacOS/macOS Downloads/developer/XXX-XXXXX - Install macOS Beta")]),e._v(" folder. This package from Apple will create "),s("code",[e._v("Install macOS Big Sur Beta.app")]),e._v(" in your "),s("code",[e._v("/Applications")]),e._v(" folder.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(429),alt:""}})]),e._v(" "),s("p",[e._v("Run the InstallAssistant.pkg and point this to whichever drive you're booting off of, this is where the Install.app will be dropped:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(430),alt:""}})]),e._v(" "),s("p",[e._v("Once done, you should find it located in your Applications folder:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(431),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"creating-the-installer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-installer"}},[e._v("#")]),e._v(" Creating the installer")]),e._v(" "),s("p",[e._v("To create the USB is quite simple, grab your USB drive and open Disk Utility in macOS. Next format as follows:")]),e._v(" "),s("ul",[s("li",[e._v("Name:   MyVolume")]),e._v(" "),s("li",[e._v("Format: macOS Journaled")]),e._v(" "),s("li",[e._v("Scheme: GUID Partition Map")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(326),alt:""}})]),e._v(" "),s("p",[e._v("Once this is done, run the following command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo /Applications/Install\\ macOS\\ Big\\ Sur\\ Beta.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n")])])]),s("p",[e._v("This will take some time so you may want to grab a coffee, once done your USB should be good to boot!(Assuming you updated OpenCore and co earlier)")]),e._v(" "),s("h3",{attrs:{id:"installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),s("p",[e._v("Installing macOS 11: Big Sur on a Hackintosh is fairly similar to how previous version of macOS were installed, with the main issues being:")]),e._v(" "),s("ul",[s("li",[e._v("KernelCollections over prelinkedkernel (discussed above)")]),e._v(" "),s("li",[e._v("Installation being much longer\n"),s("ul",[s("li",[e._v("This is due to the new snapshot feature of the OS")])])]),e._v(" "),s("li",[e._v("Certain kexts breaking\n"),s("ul",[s("li",[e._v("Mainly Lilu and plugins, though quite obvious when they break")])])])]),e._v(" "),s("p",[e._v("For the last one, if you get a kernel panic with Lilu we highly recommend you to update to the latest version with links we provided above. If errors are still not resolved, you may need to disable Lilu outright.")]),e._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("h4",{attrs:{id:"stuck-at-forcing-cs-runtime-for-entitlement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-at-forcing-cs-runtime-for-entitlement"}},[e._v("#")]),e._v(" Stuck at "),s("code",[e._v("Forcing CS_RUNTIME for entitlement")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(432),alt:"Credit to Stompy for image"}})]),e._v(" "),s("p",[e._v("This is actually the part at where macOS will seal the system volume, and where it may seem that macOS has gotten stuck. "),s("strong",[e._v("DO NOT RESTART")]),e._v(" thinking you're stuck, this will take quite some time to complete.")]),e._v(" "),s("h3",{attrs:{id:"stuck-at-pci-configuration-begins-for-intel-s-hedt-boards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-at-pci-configuration-begins-for-intel-s-hedt-boards"}},[e._v("#")]),e._v(" Stuck at "),s("code",[e._v("PCI Configuration Begins")]),e._v(" for Intel's HEDT boards")]),e._v(" "),s("p",[s("img",{attrs:{src:a(433),alt:""}})]),e._v(" "),s("p",[e._v("As previously mentioned, Intel HEDT motherboards may have some issues revolving around their RTC device in ACPI. To resolve, you'll need to look at your RTC device and see which regions are missing. For more information, see here: "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-RTC0-RANGE.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-RTC0-RANGE.dsl"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"stuck-on-ramrod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-ramrod"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("ramrod")]),e._v("(^^^^^^^^^^^^^)")]),e._v(" "),s("p",[s("img",{attrs:{src:a(434),alt:"Credit to Notiflux for image"}})]),e._v(" "),s("p",[e._v("If you get stuck around the "),s("code",[e._v("ramrod")]),e._v(" section (specifically, it boots, hits this error, and reboots again back into this, causing a loop), this hints that your SMC emulator is broken. To fix this, you have 2 options:")]),e._v(" "),s("ul",[s("li",[e._v("Ensure you're using the latest builds of VirtualSMC and Lilu, with the "),s("code",[e._v("vsmcgen=1")]),e._v(" boot-arg")]),e._v(" "),s("li",[e._v("Switch over to "),s("a",{attrs:{href:"https://bitbucket.org/RehabMan/os-x-fakesmc-kozlek/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rehabman's FakeSMC"),s("OutboundLink")],1),e._v(" (you can use the "),s("code",[e._v("MinKernel")]),e._v("/"),s("code",[e._v("MaxKernel")]),e._v(" trick mentioned above to restrict FakeSMC to Big Sur and up")])]),e._v(" "),s("p",[e._v("And when switching kexts, ensure you don't have both FakeSMC and VirtualSMC enabled in your config.plist, as this will cause a conflict.")]),e._v(" "),s("h3",{attrs:{id:"deviceproperties-injection-failing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deviceproperties-injection-failing"}},[e._v("#")]),e._v(" DeviceProperties injection failing")]),e._v(" "),s("p",[e._v("With Big Sur, macOS has become much pickier with devices being present in ACPI. Especially if you're injecting important properties for WhateverGreen or AppleALC, you may find they're no longer applying. To verify whether your ACPI defines your hardware, check for the "),s("code",[e._v("acpi-path")]),e._v(" property in "),s("a",{attrs:{href:"https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-210.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("IORegistryExplorer"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("p",[s("img",{attrs:{src:a(435),alt:""}})]),e._v(" "),s("p",[e._v("If no property is found, you'll need to create an SSDT that provides the full pathing as you likely have a PCI Bridge that is not documented in your ACPI tables. An example of this can be found here: "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-BRG0.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-BRG0"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Note")]),e._v(": This issue may also pop up in older versions of macOS, however Big Sur is most likely to have issues.")])]),e._v(" "),s("h3",{attrs:{id:"some-kexts-may-not-be-compatible-with-big-sur-yet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#some-kexts-may-not-be-compatible-with-big-sur-yet"}},[e._v("#")]),e._v(" Some kexts may not be compatible with Big Sur yet")]),e._v(" "),s("p",[e._v("There are a lot of kexts out there, and Big Sur is still pretty new. Not all kexts are working yet, so if you're experiencing a weird kernel panic, one thing you can try is booting with only the essential kexts (Lilu, VirtualSMC/FakeSMC, WhateverGreen) and seeing if it works. If so, you can enable kexts one by one to try to narrow down the issue.")]),e._v(" "),s("h2",{attrs:{id:"virtual-machine-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machine-route"}},[e._v("#")]),e._v(" Virtual Machine Route")]),e._v(" "),s("p",[e._v("If you're still facing issues, or if with a new beta things break, you can try the virtual machine route to install on a disk and then transfer it over to your hack. Follow the following instructions to build install media and then install in a hypervisor.")]),e._v(" "),s("p",[e._v("Note: If you have an AMD CPU, this method isn't going to work.")]),e._v(" "),s("h3",{attrs:{id:"building-the-installation-media"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-the-installation-media"}},[e._v("#")]),e._v(" Building the Installation Media")]),e._v(" "),s("p",[e._v("Requirements:")]),e._v(" "),s("ul",[s("li",[e._v("A computer or VM running macOS")]),e._v(" "),s("li",[e._v("The desired macOS installation software installed to /Applications")])]),e._v(" "),s("p",[e._v("Once you have the installation software installed to /Applications you will need to create a VDI of the installation media that will be used to install macOS in your VM. The instructions below are intended to be cut and pasted without editing unless specified.")]),e._v(" "),s("p",[e._v("First, set the IMAGE variable to the name of the installation you are installing. The example defines the image for Big Sur.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("IMAGE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Install macOS Big Sur Beta"')]),e._v("\n")])])]),s("p",[e._v("Next, create an empty 16GB image to host the media.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("mkfile -n 16g "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${IMAGE}")]),e._v('.img"')]),e._v("\n")])])]),s("p",[e._v('Verify that you have a 16GB file named "Install macOS Beta.img" before continuing.  After that, attach it to your macOS system as a virtual disk using the variable you created earlier.')]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DISK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("hdiutil attach -imagekey diskimage-class"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("CRawDiskImage -nomount "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${IMAGE}")]),e._v('.img"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("awk")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{printf "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),s("p",[e._v('Run diskutil list and verify that you have a disk attached that is type "disk image".')]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("diskutil list\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("snip"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n/dev/disk4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("disk image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(":\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#:                       TYPE NAME                    SIZE       IDENTIFIER")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(":                                                   +16.8 GB    disk4\n")])])]),s("p",[e._v("Now that the image is mounted, format it to Journaled HFS+.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("diskutil eraseDisk JHFS+ "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${IMAGE}")]),e._v('"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${DISK}")]),e._v("\n")])])]),s("p",[e._v("Once the image is formatted, create the installation media.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/Applications/'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${IMAGE}")]),e._v('.app/Contents/Resources/createinstallmedia"')]),e._v(" --nointeraction --volume "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/Volumes/'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${IMAGE}")]),e._v('"')]),e._v("\n")])])]),s("p",[e._v("Now detach or eject the virtual disk.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("### Eject all of the sub volumes first.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[e._v("VDISK")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("hdiutil info "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("&1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("awk")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/disk[0-9]/ {print "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" hdiutil "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("eject")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${VDISK}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v("/dev/null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("### Next eject the virtual disk itself")]),e._v("\nhdiutil "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("eject")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${DISK}")]),e._v("\n")])])]),s("p",[e._v("You now have a raw image of the installer. Follow the appropriate page for the hypervisor you'll be choosing:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/extras/big-sur/virtualbox.html"}},[e._v("VirtualBox")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/extras/big-sur/fusion.html"}},[e._v("VMware Fusion")])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);