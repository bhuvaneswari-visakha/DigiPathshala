"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Settings, LogIn, WifiOff, Star, Award, TrendingUp, Globe } from "lucide-react"
import { registerServiceWorker } from "@/lib/pwa-utils"
import { offlineStorage } from "@/lib/offline-storage"
import { authService } from "@/lib/auth"
import { i18n } from "@/lib/i18n"
import { syncService } from "@/lib/sync"
import { LanguageSelector } from "@/components/language-selector"
import { SyncStatusIndicator } from "@/components/sync-status"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    // Initialize all services
    const initializeApp = async () => {
      try {
        await registerServiceWorker()
        await offlineStorage.init()
        await authService.init()
        i18n.init()
        syncService.init()

        setCurrentUser(authService.getCurrentUser())
      } catch (error) {
        console.error("App initialization failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    initializeApp()
  }, [])

  const handleLogout = async () => {
    await authService.logout()
    setCurrentUser(null)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse-slow" />
          <div className="space-y-2">
            <div className="h-2 w-32 bg-muted rounded-full animate-pulse mx-auto"></div>
            <div className="h-2 w-24 bg-muted rounded-full animate-pulse mx-auto"></div>
          </div>
          <p className="text-muted-foreground mt-4 text-lg">{i18n.t("loading")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary rounded-xl shadow-lg">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-card-foreground tracking-tight">{i18n.t("platformName")}</h1>
                <p className="text-sm text-muted-foreground">{i18n.t("platformDescription")}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <SyncStatusIndicator />
              <LanguageSelector />

              {currentUser ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-card-foreground">
                      {i18n.t("welcome")}, {currentUser.name}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">{currentUser.role}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="hover:bg-destructive hover:text-destructive-foreground transition-colors bg-transparent"
                  >
                    {i18n.t("logout")}
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => (window.location.href = "/auth/login")}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  {i18n.t("login")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
            <div
              className="absolute top-40 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <h2 className="text-5xl font-bold text-card-foreground mb-6 text-balance leading-tight">
            {i18n.t("welcome")} to <span className="text-primary">{i18n.t("platformName")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            An offline-first digital learning platform designed for rural schools. Access interactive lessons, quizzes,
            and track your progress even without internet connectivity.
          </p>

          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">25+</div>
              <div className="text-sm text-muted-foreground">Schools</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">{i18n.t("student")} Portal</CardTitle>
              <CardDescription className="text-base">
                Access lessons, take quizzes, and track your learning progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Interactive lessons in multiple languages
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Offline access to downloaded content
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Progress tracking and achievements
                </div>
              </div>
              <Button
                className="w-full h-12 text-base font-semibold hover:scale-105 transition-transform duration-200"
                size="lg"
                onClick={() =>
                  currentUser && currentUser.role === "student"
                    ? (window.location.href = "/student")
                    : (window.location.href = "/auth/login")
                }
              >
                {currentUser && currentUser.role === "student"
                  ? `Go to ${i18n.t("dashboard")}`
                  : `Enter as ${i18n.t("student")}`}
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-secondary hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">{i18n.t("teacher")} Portal</CardTitle>
              <CardDescription className="text-base">
                Monitor student progress, manage content, and generate reports
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Student progress dashboard
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Content management tools
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Performance analytics
                </div>
              </div>
              <Button
                className="w-full h-12 text-base font-semibold hover:scale-105 transition-transform duration-200"
                size="lg"
                variant="secondary"
                onClick={() =>
                  currentUser && currentUser.role === "teacher"
                    ? (window.location.href = "/teacher")
                    : (window.location.href = "/auth/login")
                }
              >
                {currentUser && currentUser.role === "teacher"
                  ? `Go to ${i18n.t("dashboard")}`
                  : `Enter as ${i18n.t("teacher")}`}
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-accent hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-10 w-10 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">{i18n.t("admin")} Portal</CardTitle>
              <CardDescription className="text-base">Manage content, users, and platform settings</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Content management system
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  User administration
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Platform analytics
                </div>
              </div>
              <Button
                className="w-full h-12 text-base font-semibold hover:scale-105 transition-transform duration-200 bg-transparent"
                size="lg"
                variant="outline"
                onClick={() =>
                  currentUser && currentUser.role === "admin"
                    ? (window.location.href = "/admin")
                    : (window.location.href = "/auth/login")
                }
              >
                {currentUser && currentUser.role === "admin"
                  ? `Go to ${i18n.t("dashboard")}`
                  : `Enter as ${i18n.t("admin")}`}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-card-foreground mb-4">Platform Features</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for rural education with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                <WifiOff className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-card-foreground">{i18n.t("offlineFirst")}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works seamlessly without internet connection
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-card-foreground">{i18n.t("multiLanguage")}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Support for Punjabi, Hindi, and English</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-card-foreground">{i18n.t("interactiveContent")}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Videos, quizzes, and digital literacy modules
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-chart-5/20 to-chart-5/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-chart-5" />
              </div>
              <h4 className="font-bold text-lg mb-3 text-card-foreground">Progress Tracking</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time analytics and performance insights
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card/30 rounded-3xl p-12 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">What Our Users Say</h3>
            <p className="text-muted-foreground">Real feedback from students and teachers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "This platform has transformed how we learn. Even without internet, I can access all my lessons!"
              </p>
              <div className="font-semibold text-card-foreground">Priya Singh</div>
              <div className="text-sm text-muted-foreground">Class 10 Student</div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "The analytics help me understand each student's progress. It's incredibly useful for rural teaching."
              </p>
              <div className="font-semibold text-card-foreground">Rajesh Kumar</div>
              <div className="text-sm text-muted-foreground">Mathematics Teacher</div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <Settings className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Managing content across multiple schools has never been easier. The offline sync is perfect."
              </p>
              <div className="font-semibold text-card-foreground">Dr. Meera Patel</div>
              <div className="text-sm text-muted-foreground">School Administrator</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
