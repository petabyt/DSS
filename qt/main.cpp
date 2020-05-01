#include <QApplication>
#include "AskRegistering.h"

int main(int argc, char **argv)
{
    QApplication app(argc, argv);
    AskRegistering ask;
    
    ask.show();
    
    return app.exec();
}

